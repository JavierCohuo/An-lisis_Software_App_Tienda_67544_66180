import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import { Pressable, Text, View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const Products = () => {
  const { buyProducts } = useContext(DataContext);
  const productos = [
    {
      id: 1,
      productName: "Sandias",
      price: 15,
      img: "https://frutasolivar.com/wp-content/uploads/2020/07/31606320_s-1.jpg.webp",
    },
    {
      id: 2,
      productName: "Cerveza",
      price: 50,
      img: "https://lamaschiquita.com/cdn/shop/products/1261_800x.jpg?v=1576946848",
    },
    {
      id: 3,
      productName: "Bananas",
      price: 25,
      img: "https://fruvemex.com/wp-content/uploads/2022/07/istockphoto-173242750-612x612-1.jpg",
    },
    {
      id: 4,
      productName: "Laptop",
      price: 24999,
      img: "https://resources.claroshop.com/imagenes-sanborns-ii/1200/194441396362_2.jpg",
    },
    {
      id: 5,
      productName: "Ruffles",
      price: 20,
      img: "https://res.cloudinary.com/riqra/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1678811197/sellers/13/ajop6f0mo1y6v6vt6sfl.jpg",
    },
    {
      id: 6,
      productName: "Coca Cola",
      price: 20,
      img: "https://res.cloudinary.com/riqra/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1674839595/sellers/14/drqobt0cmhrimfpzrxzp.png",
    },
    {
      id: 7,
      productName: "Pan Blanco Bimbo",
      price: 40,
      img: "https://www.smartnfinal.com.mx/wp-content/uploads/2021/07/90284-Pan-blanco-Bimbo-680-g.jpg",
    },
  ];

  const handleBuyPress = (product) => {
    buyProducts(product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Productos</Text>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productPrice}>Precio: {item.price} $</Text>
              <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1bcb7f",
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "green",
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: "#1bcb7f",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  productList: {
    paddingBottom: 10,
  },
});

export default Products;
