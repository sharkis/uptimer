import { ReactElement, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const UpTimer = function UpTimer(): ReactElement {
  const [datetime, setDateTime] = useState(null);
  const [dummy,setDummy] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setDummy(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  },[]);

  return (
    <View>
      <Text>Timer here</Text>
      {datetime && <Text>{datetime-Date.now()}</Text>}
      <Button title="Start" onPress={() => setDateTime(Date.now())} />
    </View>
  );
};

export default UpTimer;
