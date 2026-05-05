import React from 'react'
import './App.css'
import Nav from './components/nav'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import SingleRecipePage from './pages/SingleRecipePage';
import HomePage from './pages/HomePage';
import BodyComponent from './components/BodyComponent';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage'
import SigninPage from './pages/SigninPage'
import FooterComponent from './components/FooterComponent';
import CreateRecipePage from './pages/CreateRecipePage';
import AllRecipe from './pages/AllRecipe';
import RecipeDetail from './pages/RecipeDetail'


function App() {

  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<SingleRecipePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="/all-recipe" element={<AllRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>

      <FooterComponent/>
    </>
  );
}

export default App
