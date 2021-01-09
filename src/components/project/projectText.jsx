import React, { Component } from 'react';

class ProjectText extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="projectTextContainer">
                <div className="projectTextSeparator" id="projectUpperSeparator">&#10240;</div>
                <div id="projectTextContentContainer">
                    <p>A pixel 2D JRPG game protoype realised with Unity 3D taking place in a world where your main concern is to save your friends from mental problems such as school anxiety and relationships toxicity.</p>
                    <p>My role on this project was to implement the overworld’s assets, create and assemble the city (didn't create the assets) where the player starts his journey, and implement the musics for each scene. My responsibilities also  included coding the random props instanciation in the dungeon, such as the lockers, the clocks and the doors,  and coding the functionnality of entering and exiting rooms in the dungeon.</p>
                    <p>The whole project was developped with a modular structure, making us able to create multiple dungeons very easily after the first one was done. All that was left once the modules have been coded was to create the visual and audio assets and the job was done. This project being my first time working with a modular structure, it was definitely a challenge that I liked working on and that I learned a lot from.</p>
                </div>
                <div className="projectTextSeparator" id="projectDownSeparator">&#10240;</div>
            </div>
         );
    }
}
 
export default ProjectText;