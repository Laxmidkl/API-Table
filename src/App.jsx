import React, { useState,useEffect } from 'react'
import axios from "axios";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Table from './components/page components/Table';
import Course from './components/page/Course i';

function App() {

  return (
<Routes>
  <Route path='/' element={<Table/>}/>
  <Route path='/Course/:id'element={<Course/>}/>
</Routes>
  )
}

export default App
