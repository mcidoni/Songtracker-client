'use strict'
const config = require('./config')
const store = require('./store')


const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}


const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}


const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}


const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const addSong = () => {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateSong = () => {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showSong = () => {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteSong = () => {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addSong,
  updateSong,
  showSong,
  deleteSong
}