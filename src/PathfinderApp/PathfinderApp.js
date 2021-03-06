import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Grid from './Grid/Grid';
import './PathfinderApp.css';

class PathfinderApp extends Component {  // PathfinderApp is the only stateful component of our application

  constructor(props) {
    super(props);
    let rows = Array(0);
    for (let i = 0; i < 30; i++) {  // Initialize a grid of 30 rows
      let nodes = Array(70).fill(null).map((node) => {  // Each row will contain 70 nodes
        return {isVisitedNode: false, isStartNode: false, isEndNode: false, isWallNode: false, isOnPath: false, 
          delay: 0};  // node's properties (state)
        }  
      );  
      rows.push(nodes);
    }

    // Deployment Initialization
    const startCoord = [15, 20];
    const endCoord = [15, 50];
    rows[startCoord[0]][startCoord[1]].isStartNode = true;  // Initialize a default start node
    rows[endCoord[0]][endCoord[1]].isEndNode = true;  // Initialize a default end node

    // Example mini maze for recording GIF
    // const startCoord = [15, 20];
    // const endCoord = [15, 27];
    // rows[startCoord[0]][startCoord[1]].isStartNode = true;  // Initialize a default start node
    // rows[endCoord[0]][endCoord[1]].isEndNode = true;  // Initialize a default end node

    this.state = {
      rows: rows,
      startCoord: startCoord,
      endCoord: endCoord,
      pathLst: null
    }
  }

  // Set the nodes on the path with the right path order
  setOnPath = (pathLst, stagger) => {
    const rows = this.state.rows.slice();
    pathLst.forEach((coord, pathOrder) => {
      const [i, j] = coord;
      rows[i][j].delay = stagger * pathOrder;
      rows[i][j].isOnPath = true;
    })
    this.setState({
      rows: rows
    })
  }

  setVisited = (visitedLst, stagger) => {
    const rows = this.state.rows.slice();
    visitedLst.forEach((coord, visitedOrder) => {
      const [i, j] = coord;
      rows[i][j].delay = stagger * visitedOrder;
      console.log(i, j, rows[i][j].delay);
      rows[i][j].isVisitedNode = true;
    });
    this.setState({
      rows: rows,
    });
  }

  // Run the search with the algorithm passed as argument
  startSearch = (searchAlgorithm) => {  
    console.log("Running Search Algorithm");
    console.log("Clearing Visited Path");
    this.setState({ 
      rows: this.getClearedPathState()
    }, async () => {
      const { pathLst, visitedLst } = 
          searchAlgorithm(...this.state.startCoord, ...this.state.endCoord, this.state.rows); 

      console.log(visitedLst);

      // This sleep function is necessary to ensure that the board is reset before
      // changing the state of unvisited nodes to visited
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
      };
      await sleep(100);

      // set the delay factor of the animation, each succeeding node has 
      // 'stagger' millisecond more animation delay than preceding node
      // const stagger = 100;  // Temporary code to create GIF ===========================================================================
      const stagger = 40;
      // console.log(pathLst);
      this.setState({
        pathLst: pathLst
      }, () => this.setVisited(visitedLst, stagger));
    })
  }

  // Reset state of every node to default values except for isStartNode, isEndNode and isWallNode properties
  getClearedPathState = () => {
    const rows = this.state.rows.slice();
    rows.forEach((row) => {
      row.forEach((node) => {
        node.isVisitedNode = false;
        node.isOnPath = false;
        node.delay = 0;
      });
    });
    return rows;
  }

  generateWalls = () => {
    let rows = this.state.rows.slice();

    console.log("Generating Walls");
    rows = this.state.rows.slice();
    const successWithProbability = (p) => { return Math.random() <= p; };
    rows.forEach((row) => {
      row.forEach((node) => {
        if (successWithProbability(0.3)) {
          node.isWallNode = true;
        } else {
          node.isWallNode = false;
        }
        // node.isWallNode = false;  // Temporary code to create GIF ===========================================================================
        node.isVisitedNode = false;
        node.isOnPath = false;
        node.delay = 0;
      });
    });

    this.setState({
      rows: rows
    });

    // Temporary code to create GIF ===========================================================================
    // The below 2 for loops are temporary boundary to contain the start and end node. Required to create a GIF.
    // for (let i = 10; i <= 20; i++) {
    //   rows[i][17].isWallNode = true;
    //   rows[i][30].isWallNode = true;
    // }
    // for (let j = 17; j <= 30; j++) {
    //   rows[10][j].isWallNode = true;
    //   rows[20][j].isWallNode = true;
    // }
    // rows[14][18].isWallNode = true;
    // rows[17][18].isWallNode = true;
    // rows[19][18].isWallNode = true;
    // rows[12][19].isWallNode = true;
    // rows[18][19].isWallNode = true;
    // rows[16][20].isWallNode = true;
    // rows[19][20].isWallNode = true;
    // rows[19][21].isWallNode = true;
    // rows[18][21].isWallNode = true;
    // rows[16][21].isWallNode = true;
    // rows[15][21].isWallNode = true;
    // rows[14][21].isWallNode = true;
    // rows[12][21].isWallNode = true;
    // rows[13][22].isWallNode = true;
    // rows[13][23].isWallNode = true;
    // rows[19][23].isWallNode = true;
    // rows[17][24].isWallNode = true;
    // rows[16][24].isWallNode = true;
    // rows[16][25].isWallNode = true;
    // rows[14][25].isWallNode = true;
    // rows[11][25].isWallNode = true;
    // rows[17][26].isWallNode = true;
    // rows[15][26].isWallNode = true;
    // rows[17][27].isWallNode = true;
    // rows[12][27].isWallNode = true;
    // rows[11][27].isWallNode = true;
    // rows[19][28].isWallNode = true;
    // rows[18][28].isWallNode = true;
    // rows[15][28].isWallNode = true;
    // rows[13][28].isWallNode = true;
    // rows[11][28].isWallNode = true;
    // rows[17][29].isWallNode = true;
    // rows[13][29].isWallNode = true;
    // Temporary code to create GIF ===========================================================================
  }

  render() {
    return (
      <div>
        <Navbar onClickSearch={this.startSearch} onClickGenWalls={this.generateWalls} />
        <Grid rows={this.state.rows} pathLst={this.state.pathLst} animatePath={this.setOnPath} />

      </div>
    );
  }

}

export default PathfinderApp;
