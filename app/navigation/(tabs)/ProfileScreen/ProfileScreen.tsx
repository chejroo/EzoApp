import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '@app/components/Themed';

export default function Page() {
  const mockProfileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'Software developer with a passion for creating amazing applications.',
    location: 'San Francisco, CA',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: mockProfileData.profilePicture }}
        style={styles.profilePicture}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Name</Text>
        <Text style={styles.sectionContent}>{mockProfileData.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.sectionContent}>{mockProfileData.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.sectionContent}>{mockProfileData.bio}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionContent}>{mockProfileData.location}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: 'gray',
  },
});