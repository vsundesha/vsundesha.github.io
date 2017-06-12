/**
@name Search.js
@description Class for Search query
@version 1.0
@date 08/06/2017
@author Vicky Madan Sundesha
*/

function Search()
{
    //Attributes declaration
    this.name;
    this.location;
    this.goTerm;



    //methods declaration
    this.construct = function (name,location,goTerm)
    {
        this.setName(name);
        this.setLocation(location);
        this.setGoTerm(goTerm);

    }


    //setters
    this.setName = function (name) {this.name=name;}
    this.setLocation = function (location) {this.location=location;}
    this.setGoTerm = function (goTerm) {this.goTerm=goTerm;}



    //getters
    this.getName = function () {return this.name;}
    this.getLocation = function () {return this.location;}
    this.getGoTerm = function () {return this.goTerm;}

}
