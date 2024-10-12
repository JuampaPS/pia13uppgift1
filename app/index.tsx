import FancyBox from "@/components/FancyBox";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {


  return (
    <View style={{ backgroundColor: "cyan", flex: 1 }}>

      <View style={{ backgroundColor: "red", height: 150, justifyContent: "center", aligItems: "center", }}>
        <Text style={{ fontSize: 35, color: "black", textAlign: "center" }}>
          <Text>RÖD</Text>
        </Text>

      </View>

      <View style={{ backgroundColor: "white", height: 150, flexDirection: "row" }}>

        <View style={{ backgroundColor: "green", flex: 1 }}>
          <Text style={{ fontSize: 35, }}>
            <Text>GRÖN</Text>
          </Text>
        </View>

        <View style={{ backgroundColor: "yellow", flex: 1, justifyContent: "center", alignItems: "center" }}>
        </View>

      </View>


      <View style={{ backgroundColor: "red", height: 60, flexDirection: "row" }}>
        <View style={{ backgroundColor: "red", flex: 3 }}>
        </View>

        <View style={{ backgroundColor: "black", flex: 1 }}>
        </View>


      </View>









      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25, color: "white", textAlign: "right" }}>

        </Text>


      </View>


      <View style={{ backgroundColor: "orange", height: 50, justifyContent: "center", aligItems: "center", }}>
        <Text style={{ fontSize: 35, color: "black", textAlign: "right" }}>
          <Text>ORANGE</Text>
        </Text>



      </View>


    </View>
  );
}
