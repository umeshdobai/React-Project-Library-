import React, { Component } from 'react'
import './HomeStyle.css'

export class Navbar extends Component {
    render() {
        return (
        <div>
            
            <img src="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/829/news/large_news888872_880911.png" height="300" width="1420" />    
            <div className="container"> 
                
            <img  src="https://www.fullstackreact.com/assets/images/30days/30-days-of-react-book-cover-2-as-book-220.png" alt="30 Days of React Mini-Ebook" align="right" />

                    <p>This post is part of the series <b>30 Days of React.</b></p>
                    <p>In this series, 
                        we're starting from the 
                        <em>very basics</em> and walk <br />through everything 
                        you need to know to get started with <br />React. 
                        If you've ever wanted to learn React, this is the place to  <br />start!</p>
                
                
                       
                
            </div>
            <div className="button">
                
                <a>DOWNLOAD THE FREE PDF</a>
                
            </div>
        
            
            <table class="table table-hover">
                <tbody>
                <tr>
                    <td><img src="https://images-na.ssl-images-amazon.com/images/I/41Q4EVwoFnL._SL160_.jpg" /></td>
                    <td><br /><br />TSEGA ETEFA<br />
                        <b>The Origins of Ethnic Conflict in Africa</b><br />
                        Politics and Violence in Darfur, Oromia, and the Tana Delta
                        Palgrave Macmillan, 2019
                        August 7, 2019 Susan Thomson
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51TyfqyAYEL._SL160_.jpg" />
                    </td>
                    <td><br /><br />
                        ERIN-MARIE LEGACEY<br />
                        <b>Making Space for the Dead</b><br />
                        Catacombs, Cemeteries, and the Reimagining of Paris, 1780-1830
                        Cornell University Press, 2019
                        August 7, 2019 Beth Mauldin
                    </td>
                    </tr>
                <tr>
                    <td><img src="https://images-na.ssl-images-amazon.com/images/I/51nn%2BS8jtDL._SL160_.jpg" /></td>
                    <td><br /><br />JULILLY KOHLER-HAUSMANN<br />
                        <b>Getting Tough</b><br />
                        Welfare and Imprisonment in 1970s America
                        Princeton University Press, 2017
                        August 7, 2019 Stephen Colbr /ook

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
           
        )
    }
}

export default Navbar
