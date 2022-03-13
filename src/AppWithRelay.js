import logo from "./logo.png";
import "./App.css";
import { BrightIDRegistrationViaRelay } from "./components/react-hashmask-registration";
//import { BrightIDRegistrationViaRelay } from "react-hashmask-registration";

function AppWithRelay() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    className="App-header__image"
                    src={logo}
                    alt="The Hashmasks"
                    width="200px"
                />
            </header>
            <main>
                <div className="App-brightid-registration">
                    <BrightIDRegistrationViaRelay
                        context="hashmasks"
                        contractAddr=""
                        mainnetRpcUrl=""
                        walletConnectInfuraId=""
                       
                        // relayVerificationURL="http://localhost:5001/brightid-registration-relay/register"

                        // appStoreAndroid="https://play.google.com/store/apps/details?id=org.brightid"
                        // appStoreIos="https://apps.apple.com/us/app/brightid/id1428946820"
                        // brightIdMeetUrl="https://meet.brightid.org"
                        // deepLinkPrefix="brightid://link-verification/http:%2f%2fnode.brightid.org"
                        // registrationChainId="74"
                        // registrationRpcUrl="https://idchain.one/rpc/"
                        // verificationUrl="https://app.brightid.org/node/v5/verifications"

                        verificationUrl="https://node.brightid.org/brightid/v6/verifications"
                    />
                </div>
            </main>
            <footer className="App-footer">
                &copy; 2022{" "} 
                <a
                    href="https://www.thehashmasks.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Suum Cuique Labs GmbH
                </a>
            </footer>
        </div>
    );
}

export default AppWithRelay;
