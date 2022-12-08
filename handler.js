const express = require("express");
const { json } = require("express");
const { fileExist, linkPath } = require("./utils");
const fs = require("fs");

function getAllBooks(req, res, next) {
  if (fileExist) {
    fs.readFile(linkPath, (err, data) => {
      if (err)
        res.json({
          msg: "An error occurred while reading your book list, please try again later",
          success: false,
        });
      const books = JSON.parse(data.toString());

      res.json({
        books,
      });
    });
  } else {
    res.json({
      msg: "the books list is empty",
    });
  }
}

function addToBooks(req, res) {
  const data = req.body;
  console.log(data);

  if (fileExist) {
    fs.readFile(linkPath, (err, data_) => {
      if (err) {
        res.json({
          msg: "An error occurred while reading your book list, please try again later",
          success: false,
        });
      }

      const books = JSON.parse(data_.toString());
      console.log(books);
      data.id = books.length + 1;
      data.created = new Date().toISOString();
      data.updated = new Date().toISOString();

      books.push(data);

      fs.writeFile(linkPath, JSON.stringify(books), (err) => {
        if (err) {
          return res.json({
            msg: "An error occurred while creating your books, try again later",
            success: false,
          });
        }
        res.json({
          books,
        });
      });
    });
  } else {
    data.id = 1;
    data.created = new Date().toISOString();
    data.updated = new Date().toISOString();
    const books = [data];

    fs.writeFile(linkPath, JSON.stringify(books), (err) => {
      if (err) {
        return res.json({
          msg: "An error occurred while creating your books, try again later",
          success: false,
        });
      }
      res.json({
        books,
      });
    });
  }
}

module.exports = {
  getAllBooks,
  addToBooks,
};
