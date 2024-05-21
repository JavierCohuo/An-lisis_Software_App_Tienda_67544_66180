import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LoginForm from "./src/components/Login/LoginForm";
import Products from "./src/components/Products/Products";
import ModalComponent from "./src/components/ModalComponent/ModalComponent";
import { DataProvider } from "./src/components/Context/DataContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <DataProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Super Mart</Text>
          {isLoggedIn && (
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.content}>
          {isLoggedIn ? (
            <>
              <Products />
              <ModalComponent />
            </>
          ) : (
            <LoginForm onLogin={() => setIsLoggedIn(true)} />
          )}
        </View>
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1bcb7f",
    padding: 35,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  logoutButton: {
    backgroundColor: "#ff6347",
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
