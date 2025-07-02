import './Components/Landing Page/ShipNowPage.css';
import Header from './Components/Landing Page/Header';
import Footer from './Components/Landing Page/Footer';

function ShipNow(){
    return(
        <>
        <Header></Header>

        <div className="Wrapper">
        <div className="Image">

            <div className="ImageText">
                <h2>Easy to ship with us...</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nam</p>
            </div>

        </div>
        </div>

        <div className="UpperHalfForm">

            <div className="SendersAddress">

                <form id="SenderForm">
                    <h2>Sender's Form</h2>
                    {/* <fieldset className="Sender"> */}
                        {/* <legend>Sender's Address: */}
                            {/* <br /> */}
                            <div className="Name">
                            <label htmlFor="SenderName">Name: </label>
                            <input type="text" id="SenderName"/>
                            </div>
                            <div className="AddressDiv">
                            <div className="AddressLine1">
                            <label htmlFor="SenderAddress" class="AddressLabel">Address: </label>
                            <input type="text" id="SenderAddress1" placeholder='Address Line 1'/>
                            </div>
                            </div>

                            <div className="AddressLine2">
                            <input type="text" id="SenderAddress2" placeholder='Address Line 2'/>
                            </div>

                            <div className="StateDiv">
                            <label htmlFor="State" class="StateLabel">State/Union Territory: </label>
                            <input type="text" id="SenderState"/>
                            </div>
                            <div className="CityDiv">
                            <label htmlFor="City" class="CityLabel">City: </label>
                            <input type="text" id="SenderCity"/>
                            </div>

                            <div className="PinCodeDiv">
                            <label htmlFor="Pincode" class="PincodeLabel">PinCode: </label>
                            <input type="text" id="SenderPincode"/>
                            </div>

                            <button id="SenderButton">SUBMIT</button>

                        {/* </legend>
                    </fieldset> */}
                </form>
            </div>

            <div className="ReceiversForm">
                            <h2>Receiver's Form</h2>
                            <div className="RecName">
                            <label htmlFor="ReceiverName">Name: </label>
                            <input type="text" id="ReceiverName"/>
                            </div>

                            <div className="RecAddressDiv">
                            <div className="RecAddressLine1">
                            <label htmlFor="ReceiverAddress" class="AddressLabel">Address: </label>
                            <input type="text" id="ReceiverAddress1" placeholder='Address Line 1'/>
                            </div>

                            <div className="RecAddressLine2">
                            <input type="text" id="ReceiverAddress2" placeholder='Address Line 2'/>
                            </div>
                            </div>

                            <div className="RecStateDiv">
                            <label htmlFor="ReceiverState" class="StateLabel">State/Union Territory: </label>
                            <input type="text" id="ReceiverState"/>
                            </div>

                            <div className="RecCityDiv">
                            <label htmlFor="ReceiverCity" class="CityLabel">City: </label>
                            <input type="text" id="ReceiverCity"/>
                            </div>

                            <div className="RecPinCodeDiv">
                            <label htmlFor="ReceiverPincode" class="PincodeLabel">PinCode: </label>
                            <input type="text" id="RecPincode"/>
                            </div>

                            <button id="ReceiverButton">SUBMIT</button>
            </div>

        </div>   {/*UpperHalfForm  div ends here */}

        <div className="LowerHalfForm">
            <div className="PackageDetails">

                    <h2>Package Details</h2>

                    <div className="PkgWeightUnit">
                        
                    <div className="PkgWeight">
                <label htmlFor="Weight" class="WeightLabel">Weight: </label>
                <input type="text" id="PackageWeight"/>
                </div>

                <div className="PkgUnit">
                <label htmlFor="Unit" class="UnitLabel">Unit: </label>
                <input type="text" id="PackageUnit"/>
                </div>
                </div>

                <div className="PkgContents">
                    <label htmlFor="PackageContent" class="DescriptionLabel">Describe your package: </label>
                    <textarea name="PackageContent" id="PackageContent" placeholder='Describe your package'></textarea>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="PackageCheckbox"/>
                    <label htmlFor="PackageCheckbox" class="CheckboxLabel">Is the package fragile?</label>
                </div>

                <div className="PackageDimensions">
                    <label htmlFor="Length" class="LengthLabel">Length: </label>
                    <input type="text" id="PackageLength"/>

                    <label htmlFor="Width" class="WidthLabel">Width: </label>
                    <input type="text" id="PackageWidth"/>

                    <label htmlFor="Height" class="HeightLabel">Height: </label>
                    <input type="text" id="PackageHeight"/>
                </div>

                <button id="PackageDetailsButton">SUBMIT</button>
            </div>     {/*Package Details ends here */}
            
            <div className="ShipDate">
                <h2>Shipping Date</h2>
                <label htmlFor="ShippingDate" class="DateLabel">Shipping Date: </label>
                <input type="date" id="ShippingDate" />

                <button id="ShippingDateButton">SUBMIT</button>
            </div>
        </div> {/*LowerHalfForm div ends here*/}

        <Footer></Footer>
        </>
    );
}

export default ShipNow;