import { Button, Text, View } from 'react-native'

export default function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile!</Text>
      <Text>{route.params.user}'s profile</Text>
      <Button
        title="Push same screen on the stack"
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <Button
        title="Pop one screen from stack"
        onPress={() =>
          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }))
        }
      />
      <Button
        title="Pop to top"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}
