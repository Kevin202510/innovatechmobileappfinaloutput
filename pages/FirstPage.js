// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import {View, Text, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { DataTable, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card>
        <Card.Content>
          <Title>Users</Title>
          <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite Food</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
        <DataTable.Title>Actions</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
