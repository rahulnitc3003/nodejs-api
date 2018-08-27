# weather-app api
An example of weather-app api which through we can input the address or pincode into console and find the following details of inputed addres.

<ul>
  <li>Complete address of inputed pincode/address</li>
  <li>Latitude</li>
  <li>Longitude</li>
  <li>Temperature</li>
  <li>Apperent Temperature</li>
</ul>

Commands: <br>
1. node app.js --help <br> 
Output: <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show version number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[boolean] <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--address, -a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To fetch address for weather &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [string][required] <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--help, -h &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Show help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [boolean] <br>
2. node app.js --a="input address" <br> 
Example: <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node app.js --a="560067" <br>
Output: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Address:      Bengaluru, Karnataka 560067, India <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Latitude:      12.9967012 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Longitude:      77.758197 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Temperature:     79.17 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ApperentTemperature:     70.28 
