import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import BookItem from './bookItem';

class bookList extends Component {
  renderItem({item}) {
    return <BookItem book={item} />;
  }
  render() {
    const {books} = this.props;
    return (
      <View>
        <FlatList
          data={books}
          renderItem={this.renderItem}
          keyExtractor={item => item.isbn}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(bookList);
