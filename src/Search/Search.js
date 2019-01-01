import React, { Component } from 'react';
import Header from './Header.js'
import Newslist from './ItemList'
const newstab=[{
  id:'1',
  title:'Write stateless components',
  article: "There s practically nothing easier to test than pure, data-in data-out functions, so why would we throw away the opportunity to define our components in such a way by adding state to them? When testing stateful components, now we need to get our components into the right state in order to test their behaviour. We also need to come up with all of the various combinations of state (which the component can mutate at any time), and props (which the component has no control over), and figure out which ones to test, and how to do so. When components arejust functions of input props, testing is a lot easier.(More on testing later).",
  },
  
  {
  id:'2',
  title:' Use Redux.js',
  article:'In point #1, I said that React is just for views. The obvious question then is, Where do I put all my state and logic? Im glad you asked! You may already be aware of Flux, which is a style/pattern/architecture for designing web applications,  most commonly ones that use React for rendering. There are several frameworks out there that implement the ideas of Flux,  but without a doubt the one that I recommend is Redux.js*.',
  
  },
  {
  id:'3',
  title:'. Use shallow rendering',
  article:'Testing React components is still a bit of a tricky topic. Not because its hard, but because it s still an evolving area, and no single approach has emerged as the best one yet. At the moment, my go-to method is to use shallow rendering and prop assertions.Shallow rendering is nice, because it allows you to render a single component completely, but without delving into any of its child components to render those. Instead, the resulting object will tell you things like the type and props of the children. ',
  
  },
  {
  id:'4',
  title:'Use JSX, ES6, Babel, Webpack, and NPM',
  article:'The only React-specific thing here is JSX. For me JSX is a no-brainer over manually calling React.createElement. The only disadvantage is that we add a small amount of build-time complexity, which is easily solved with Babel.Once we ve added Babel though, there s no reason not to go all out and use all the great ES6 features, like constants, arrow functions, default arguments, array and object destructuring, spread and rest operators, string interpolation,  iterators and generators, a decent module system, etc. It really feels like JavaScript is beginning to grow up as a language these days, as long as you re prepared to spend a little bit of time setting up the tools.',
  
  }]


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        news:newstab,
        filtred:newstab
      }
}
search(keyword){
  let korsi =this.state.news.filter((el,i)=>{return el.title.toLowerCase().indexOf(keyword)>-1})
  this.setState({filtred:korsi})
}
  render() {
    return (
      <div className="App">
       <Header searchname={talvza=>this.search(talvza) }/>
       <Newslist news={this.state.filtred} />
      </div>
    );
  }
}

export default Search;