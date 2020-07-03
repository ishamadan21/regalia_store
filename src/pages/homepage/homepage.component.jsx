
import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Directory from '../../components/directory/directory.component';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon,MDBBtn } from "mdbreact";
import './homepage.styles.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

let styles = {
  
 width:'100%'
 
   
  
  
};
const HomePage = () => (

  <div className='homepage'>
  <div style={styles}>
    <div className>
		<Carousel className='ca'>
			<div >
				<img src= "http://www.bergamoartefiera.com/wp-content/uploads/2015/10/Clothing-Shoes-online-01.jpg" alt="abcd"  />
        <p className="legend">" A WIDE VARIETY OF CLOTHES"</p>
			</div>
			<div>
				<img src="https://www.jprarts.com/cheap-shopping/wp-content/uploads/Clothes-1024x697.jpg" alt="abcd" />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://greyareanews.com/wp-content/uploads/2016/04/Wakefield-DSCN3660-1024x697.jpg" alt="abcd"  />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://pinstripemag.com/wp-content/uploads/2018/05/mens-summer-fashion-trends-2018.jpg" alt="abcd" />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://nssdata.s3.amazonaws.com/images/galleries/21819/OneBlockDown-Kangol-RosarioRex-07b.jpg" alt="abcd" />
        <p className="legend">abcd</p>
			</div>
      <div>
				<img src="https://www.thecelebrationsociety.com/wp-content/uploads/2018/07/Stremel_MartinLeone_VitorLindoPhotoVideo_MackeyHouseWeddingPhotos065_big-e1530541923996-1024x697.jpg" alt="abc" />
        <p className="legend">abc</p>
			</div>
			<div>
				<img src="https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg" alt="Japan"/>
				<p className="legend">Japan</p>
			</div>
      <div>
				<img src="https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg"  alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/04/19150705/clothing-line.jpg"  alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZYY0cWJrSCU-j1Uiq0wnYHyc2slPSkKh2YD94MwH9OoeJSuId&usqp=CAU" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://www3.pictures.zimbio.com/mp/vcyUDbu8FSpl.jpg" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://cdn.shopify.com/s/files/1/0750/4119/t/2/assets/slide_image_1.jpg?v=17934014030251490837" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      <div>
				<img src="https://static01.nyt.com/images/2017/12/24/fashion/00SNEAKERCON5/00SNEAKERCON5-jumbo.jpg" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
       <div>
				<img src="https://static01.nyt.com/images/2017/12/24/fashion/00SNEAKERCON5/00SNEAKERCON5-jumbo.jpg" alt="Las1 Vegas"/>
				<p className="legend">Las1 Vegas</p>
			</div>
      
		</Carousel>
    </div>
	</div>
  
    <Directory />
    

    <div className='foot'>
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer>
        <MDBRow>
          
        <div class="col-md-4 col-sm-4 marb20">
            <div class="ftr-tle">
              <h4 class="white no-padding"><b>Privacy Info  & Follow us </b></h4>
            </div>
            </div>
            <p>
            We are committed to your privacy and will hold your information in accordance with our 'Privacy Policy'.
            </p>
          
          <MDBCol md="6">
            <h5 className="title" >Links</h5>
            <ul>
              <li >
              
                <a href="shop"><MDBIcon icon="spinner" spin size="1x" fixed  color="white"/>
<span className="sr-only">Loading...</span>  Shop</a>
              </li>
              <li >
                <a href="shop"><MDBIcon icon="address-card" spin size="1x" fixed />
<span className="sr-only">Loading...</span>  Contact</a>
              </li>
              <li>
                <a href="signin"><MDBIcon icon="user-plus" spin size="1x" fixed />
<span className="sr-only">Loading...</span>  Signup and Signin</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
         
            
            <MDBContainer>
            <Fragment>
      <MDBBtn size="lg" tag="a" floating social="fb" >
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>&nbsp;

      &nbsp;&nbsp;<MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>&nbsp;
      &nbsp;&nbsp;<MDBBtn  color ="blue-grey" size="lg" tag="a" floating social="gplus">
        <MDBIcon fab icon="google-plus-g"  />
      </MDBBtn>&nbsp;
      &nbsp;&nbsp;
      <MDBBtn  size="lg" tag="a" floating social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>&nbsp;
      &nbsp;&nbsp;
      <MDBBtn size="lg" tag="a" floating social="yt">
        <MDBIcon fab icon="youtube" />
      </MDBBtn>
      </Fragment>
      </MDBContainer>
            
         
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Regalia Clothing Store </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  </div>
);

export default HomePage;
