import { ReactElement, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UpTimer = function UpTimer(): ReactElement {
  const [datetime, setDateTime] = useState(null);
  const [dummy, setDummy] = useState(null);

  const saveTime = (time?: number) => {
    AsyncStorage.setItem("@starttime", time);
    setDateTime(time);
  };

  const clearTime = () => {
    AsyncStorage.removeItem("@starttime");
    setDateTime(null);
  };

  if (datetime == null) {
    const storedDateTime = AsyncStorage.getItem("@starttime")
      .then((val) => {
        val && saveTime(val);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    const interval = setInterval(() => setDummy(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const elapsed = Date.now() - datetime;

  return (
    <View>
      <Text>Timer here</Text>
      {datetime && <Text>{elapsed / 1000}</Text>}
      <Button title="Start" onPress={() => saveTime(Date.now())} />
      <Button title="Clear" onPress={clearTime} />
    </View>
  );
};

export default UpTimer;
