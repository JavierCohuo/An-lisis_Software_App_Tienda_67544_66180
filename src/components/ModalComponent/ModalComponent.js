import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { DataContext } from "../Context/DataContext";

const ModalComponent = () => {
  const { cart, setCart, buyProducts } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);

  // Total
  const total = cart.reduce((acc, el) => acc + el.quanty * el.price, 0);

  // Increase
  const handleBuyPress = (product) => {
    buyProducts(product);
  };

  // Decrease
  const handleDecreasePress = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat.quanty > 1) {
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item)));
    }
  };

  // Delete
  const handleDeletePress = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <View>
      <Pressable style={styles.modalButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.cartIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>❌</Text>
            </Pressable>
            <Text style={styles.modalText}>Cart Items:</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Text style={styles.modalTextProduct}>{item.productName}</Text>

                  <View style={styles.quantityControl}>
                    <Pressable onPress={() => handleDecreasePress(item)}>
                      <Text style={styles.controlButton}>➖</Text>
                    </Pressable>
                    <Text style={styles.quantityText}>{item.quanty}</Text>
                    <Pressable onPress={() => handleBuyPress(item)}>
                      <Text style={styles.controlButton}>➕</Text>
                    </Pressable>
                  </View>

                  <Text style={styles.totalPrice}>
                    Total: ${item.quanty * item.price}
                    <Pressable onPress={() => handleDeletePress(item)}>
                      <Text style={styles.deleteButton}>❌</Text>
                    </Pressable>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Text style={styles.totalText}>Total: ${total}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    right: 10,
    top: 10,
  },
  buttonClose: {
    backgroundColor: "#111111",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  modalButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#111111",
    padding: 10,
    borderRadius: 30,
  },
  cartIcon: {
    fontSize: 20,
    color: "white",
  },
  cartItem: {
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  modalTextProduct: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  controlButton: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalPrice: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
  },
  deleteButton: {
    marginLeft: 10,
    fontSize: 20,
    color: "red",
  },
  totalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalComponent;
