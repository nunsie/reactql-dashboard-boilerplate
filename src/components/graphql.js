// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { graphql } from 'react-apollo';

/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator
// import allMessages from 'src/graphql/queries/all_messages.gql';
import allArtists from 'src/graphql/queries/allArtists.gql';

// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires. Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
@graphql(allArtists)
export default class GraphQLMessage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      message: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
  }

  static defaultProps = {
    data: {
      message: {
        text: null,
      },
    },
  }

  renderArtists (allArtists = []) {
    console.log(allArtists)
    let list = []
    for (let index = 0; index < allArtists.length; index++) {
      const artist = allArtists[index];
      list.push(<li><p>{ artist.fullName }</p></li>)
    }
    return (
      <ul>
        { list }
      </ul>
    )
  }

  render () {
    const { data } = this.props;

    // Since we're dealing with async GraphQL data, we defend against the
    // data not yet being loaded by checking to see that we have the `message`
    // key on our returned object
    const allArtists = data.allArtists // && data.allArtists[0].fullName;

    // Apollo will tell us whether we're still loading.  We can also use this
    // check to ensure we have a fully returned response
    // const isLoading = data.loading ? 'yes' : 'nope';
    return (
      <div>
        { this.renderArtists(allArtists) }
      </div>
    );
  }
}
