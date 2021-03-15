const express = require('express');
const router = express.Router();
const Account = require('./account-model');

router.get('/', (req, res) => {
  Account.get()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', (req, res) => {
  Account.getById(req.params.id)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post('/', (req, res) => {
  Account.create(req.body)
    .then((account) => {
      res.status(201).json(account);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.put('/:id', (req, res) => {
  Account.update(req.params.id, req.body)
    .then((updatedAccount) => {
      res.status(200).json(updatedAccount);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Account.remove(id)
    .then((deletedAccount) => {
      res.status(200).json({
        message: `Account successfully deleted`,
        deletedAccount,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
