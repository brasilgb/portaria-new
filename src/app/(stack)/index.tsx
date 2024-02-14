import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Button from "@/components/Button";

type Props = {};

const Home = (props: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="profile" asChild>
        <Button title="Profile" />
      </Link>
    </View>
  );
};

export default Home;
