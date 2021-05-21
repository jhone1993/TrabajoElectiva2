import React from 'react'
import {Container, Section} from 'react-bulma-components'
import  './styles/basestyle.css'

const Tables= () => {

    return(

        <Section>
            
            <Container>
       <center><h1><strong>Básico Multitabla</strong></h1>
            <table id="" class="dataTable ">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <center><td>61</td></center>
                <td align="right">$320,800</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <center><td>22</td></center>
                <td align="right">$433,060</td>
            </tr>
            <tr>
                <td>Sonya Frost</td>
                <td>Software Engineer</td>
                <td>Edinburgh</td>
                <center><td>23</td></center>
                <td align="right">$103,600</td>
            </tr>
            <tr>
                <td>Quinn Flynn</td>
                <td>Support Lead</td>
                <td>Edinburgh</td>
                <center><td>22</td></center>
                <td align="right">$342,000</td>
            </tr>
            <tr>
                <td>Dai Rios</td>
                <td>Personnel Lead</td>
                <td>Edinburgh</td>
                <center><td>35</td></center>
                <td align="right">$217,500</td>
            </tr>
            <tr>
                <td>Gavin Joyce</td>
                <td>Developer</td>
                <td>Edinburgh</td>
                <center><td>42</td></center>
                <td align="right">$92,575</td>
            </tr>
            <tr>
                <td>Martena Mccray</td>
                <td>Post-Sales support</td>
                <td>Edinburgh</td>
                <center><td>46</td></center>
                <td align="right">$324,050</td>
            </tr>
            <tr>
                <td>Jennifer Acosta</td>
                <td>Junior Javascript Developer</td>
                <td>Edinburgh</td>
               <center><td>43</td></center>
                <td align="right">$75,650</td>
            </tr>
            <tr>
                <td>Shad Decker</td>
                <td>Regional Director</td>
                <td>Edinburgh</td>
                <center><td>51</td></center>
                <td align="right">$183,000</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <center><th>Age</th></center>
                <th align="right">Salary</th>
            </tr>
        </tfoot>
    </table>
    
    <h1><strong>Básico Multitabla</strong></h1>
    <table id="" class="dataTable" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <center><th>Age</th></center>
                <th align="right">Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jena Gaines</td>
                <td>Office Manager</td>
                <td>London</td>
                <center><td>30</td></center>
                <td align="right">$90,560</td>
            </tr>
            <tr>
                <td>Haley Kennedy</td>
                <td>Senior Marketing Designer</td>
                <td>London</td>
                <center><td>43</td></center>
                <td align="right">$313,500</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <center><td>19</td></center>
                <td align="right">$385,750</td>
            </tr>
            <tr>
                <td>Michael Silva</td>
                <td>Marketing Designer</td>
                <td>London</td>
                <center><td>66</td></center>
                <td align="right">$198,500</td>
            </tr>
            <tr>
                <td>Bradley Greer</td>
                <td>Software Engineer</td>
                <td>London</td>
                <center><td>41</td></center>
                <td align="right">$132,000</td>
            </tr>
            <tr>
                <td>Angelica Ramos</td>
                <td>Chief Executive Officer (CEO)</td>
                <td>London</td>
                <center><td>47</td></center>
                <td align="right">$1,200,000</td>
            </tr>
            <tr>
                <td>Suki Burks</td>
                <td>Developer</td>
                <td>London</td>
                <center><td>53</td></center>
                <td align="right">$114,500</td>
            </tr>
            <tr>
                <td>Prescott Bartlett</td>
                <td>Technical Author</td>
                <td>London</td>
                <center><td>27</td></center>
                <td align="right">$145,000</td>
            </tr>
            <tr>
                <td>Timothy Mooney</td>
                <td>Office Manager</td>
                <td>London</td>
                <center><td>37</td></center>
                <td align="right">$136,200</td>
            </tr>
            <tr>
                <td>Bruno Nash</td>
                <td>Software Engineer</td>
                <td>London</td>
                <center><td>38</td></center>
                <td align="right">$163,500</td>
            </tr>
            <tr>
                <td>Hermione Butler</td>
                <td>Regional Director</td>
                <td>London</td>
                <center><td>47</td></center>
                <td align="right">$356,250</td>
            </tr>
            <tr>
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
                <td>London</td>
                <center><td>21</td></center>
                <td align="right">$103,500</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <center><th>Age</th></center>
                <th align="right">Salary</th>
            </tr>
        </tfoot>
    </table>
    </center>
            </Container>
            
        </Section>
    )
} 

    export default Tables