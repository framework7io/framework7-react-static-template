const {
    Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Button, ButtonsSegmented
} = Framework7React;

const About = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <ContentBlock inner>
                <p>Here is About page!</p>
                <p>You can go <f7-link back>back</f7-link>.</p>
                <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi.       Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
            </ContentBlock>
        </Page>
    );
};

const onChangeHandler = (event) => {
    console.log('change');
};

const pStyle = {margin: '1em 0'};

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            birthDate: '2014-04-30',
            radioSelected: 1
        };        
    }

    onRadioChange(value) {
        this.setState({
           ...this.state,
           radioSelected: value 
        });
    }    

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Forms" sliding />

                <ContentBlockTitle>Form</ContentBlockTitle>
                <List form>
                    <ListItem>
                        <FormLabel>Name</FormLabel>  
                        <FormInput type="text" placeholder="Name" />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Password</FormLabel>  
                        <FormInput type="password" placeholder="Password" />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>E-mail</FormLabel>  
                        <FormInput type="email" placeholder="E-mail" /> 
                    </ListItem>
                    <ListItem>
                        <FormLabel>URL</FormLabel>  
                        <FormInput type="url" placeholder="URL" />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Phone</FormLabel>  
                        <FormInput type="tel" placeholder="Phone" />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>Birth date</FormLabel>  
                        <FormInput type="date" placeholder="Birth date" value={this.state.birthDate} />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Date time</FormLabel>  
                        <FormInput type="datetime-local" />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Gender</FormLabel>
                        <FormInput type="select">
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                        </FormInput>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Switch</FormLabel>
                        <FormInput type="switch" onChange={onChangeHandler} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Range</FormLabel>  
                        <FormInput type="range" min="0" max="100" step="1" value="90" />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Textarea</FormLabel>
                        <FormInput type="textarea" placeholder="Textarea" />
                    </ListItem>
                </List>

                <ContentBlockTitle>Form With Floating Labels</ContentBlockTitle>
                <List form>
                    <ListItem>
                        <FormLabel floating>Name</FormLabel>  
                        <FormInput type="text" placeholder="Name" />   
                    </ListItem>
                    <ListItem>
                        <FormLabel floating>Password</FormLabel>
                        <FormInput type="password" placeholder="Password" />
                    </ListItem>
                    <ListItem>
                        <FormLabel floating>E-mail</FormLabel>  
                        <FormInput type="email" placeholder="E-mail" />
                    </ListItem>
                </List>

                <ContentBlockTitle>Form Without Labels</ContentBlockTitle>
                <List form>
                    <ListItem> 
                        <FormInput type="text" placeholder="Name" />   
                    </ListItem>
                    <ListItem>
                        <FormInput type="password" placeholder="Password" />
                    </ListItem>
                    <ListItem> 
                        <FormInput type="email" placeholder="E-mail" />
                    </ListItem>
                </List>

                <ContentBlockTitle>Checkboxes</ContentBlockTitle>
                <List form>
                    {
                        [1, 2, 3].map(n => {
                            return (
                                <ListItem
                                    checkbox
                                    key={n}
                                    name="my-checkbox"
                                    value={n}
                                    title={`Checkbox ${n}`}
                                />
                            );
                        })
                    }
                </List>

                <ContentBlockTitle>Radios</ContentBlockTitle>
                <List form>
                    {
                        [1, 2, 3].map(n => {
                            return (
                                <ListItem
                                    radio
                                    key={n}
                                    name="my-radio"
                                    checked={n === this.state.radioSelected}
                                    value={n}
                                    title={`Radio ${n}`}                                   
                                    onChange={() => {this.onRadioChange(n);}}
                                />
                            );
                        })
                    }
                </List>

                <ContentBlockTitle>Buttons</ContentBlockTitle>
                <ContentBlock inner>
                    <Button style={pStyle}>Button</Button>
                    <Button round style={pStyle}>Button Round</Button>
                    <Button fill style={pStyle}>Button Fill</Button>                
                    <ButtonsSegmented style={pStyle}>
                        <Button round active>Button 1</Button>
                        <Button round>Button 2</Button>
                        <Button round>Button 3</Button>
                    </ButtonsSegmented>                         
                    <ButtonsSegmented color="orange" style={pStyle}>
                        <Button round big>Button 1</Button>
                        <Button round big active>Button 2</Button>
                        <Button round big>Button 3</Button>
                    </ButtonsSegmented>
                    <GridRow style={pStyle}>
                        <GridCol><Button big fill color="green">Send</Button></GridCol>
                        <GridCol><Button big fill color="red">Delete</Button></GridCol>
                    </GridRow>                          
                    <GridRow style={pStyle}>
                        <GridCol><Button fill raised color="green">Raised</Button></GridCol>
                        <GridCol><Button raised color="red">Raised</Button></GridCol>
                        <GridCol><Button fill raised color="pink">Raised</Button></GridCol>
                    </GridRow>                
                </ContentBlock>
            </Page>
        );
    }
};

const LeftPanel = (props, context) => (
	<Panel left reveal layout="dark">
		<View id="left-panel-view" navbarThrough dynamicNavbar="true">
			{context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
					<ContentBlock inner>
						<p>Left panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

LeftPanel.contextTypes = {
	framework7AppContext: React.PropTypes.object
};

const RightPanel = (props, context) => (
	<Panel right cover layout="dark">
		<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
			{context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding /> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Right Panel" sliding /> : null}
					<ContentBlock>
						<p>Right panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

RightPanel.contextTypes = {
	framework7AppContext: React.PropTypes.object
};

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavLeft>
							<Link icon="icon-bars" openPanel="left" />
						</NavLeft>
						<NavCenter sliding>Framework7</NavCenter>
						<NavRight>
							<Link icon="icon-bars" openPanel="right"></Link>
						</NavRight>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavLeft>
									<Link icon="icon-bars" openPanel="left" />
								</NavLeft>
								<NavCenter sliding>Framework7</NavCenter>
								<NavRight>
									<Link icon="icon-bars" openPanel="right"></Link>
								</NavRight>
							</Navbar>
						) : null}						
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
							<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
						</ContentBlock>
						<ContentBlockTitle>Navigation</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About"></ListItem>
							<ListItem link="/form/" title="Form"></ListItem>							
						</List>
						<ContentBlockTitle>Side Panels</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPanel="left">Left Panel</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openPanel="right">Right Panel</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
						<ContentBlockTitle>Modals</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPopup="#popup">Popup</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openLoginScreen="#login-screen">Login Screen</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: React.PropTypes.object
};

const AppPopup = () => (
	<Popup id="popup">
		<View navbarFixed>
			<Pages>
				<Page>
					<Navbar title="Popup">
						<NavRight>
							<Link closePopup>Close</Link>
						</NavRight>
					</Navbar>
					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
				</Page>
			</Pages>
		</View>
	</Popup> 
);

const AppLoginScreen = () => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>Username</FormLabel>
							<FormInput name="username" placeholder="Username" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput name="password" type="password" placeholder="Password" />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
						<ListLabel>
							<p>Click Sign In to close Login Screen</p>
						</ListLabel>
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}];

const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="ios" routes={routes}>		
		<Statusbar />		
		<LeftPanel />
		<RightPanel />
		<MainViews />
		<AppPopup />
		<AppLoginScreen />
	</Framework7App>  
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);