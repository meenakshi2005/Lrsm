import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [loginId, setLoginId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedStudentId = localStorage.getItem('sid');
    const savedLoginId = localStorage.getItem('uid');

    if (token) {
      setIsAuthenticated(true);
      setIsToken(token);
      setStudentId(savedStudentId);
      setLoginId(savedLoginId);
    }
  }, [children,isToken,studentId,loginId]);

  const login = (token, studentId, loginId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('sid', studentId);
    localStorage.setItem('uid', loginId);

    setIsToken(token);
    setStudentId(studentId);
    setLoginId(loginId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('sid');
    localStorage.removeItem('uid');
    setIsAuthenticated(false);
    setIsToken(null);
    setStudentId(null);
    setLoginId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isToken, studentId, loginId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
