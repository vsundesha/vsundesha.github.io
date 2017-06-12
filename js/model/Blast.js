/**
@sequence Blast.js
@description Class for Blast query
@version 1.0
@date 08/06/2017
@author Vicky Madan Sundesha
*/

function Blast()
{
    //Attributes declaration
    this.sequence;

    //methods declaration
    this.construct = function (sequence)
    {
        this.setSequence(sequence);
    }

    //setters
    this.setSequence = function (sequence) {this.sequence=sequence;}



    //getters
    this.getSequence = function () {return this.sequence;}

}
