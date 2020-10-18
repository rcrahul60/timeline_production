import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	Typography,
	Divider,
	Button,
	TextField,
	FormControl,
	Box,
	InputAdornment,
	Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(0),
		},
		marginBottom: theme.spacing(2),
		
	},
	title: {
		...theme.typography.h4,
		[theme.breakpoints.down('sm')]: {
			...theme.typography.h5,
			fontWeight: 600,
		},
		fontWeight: 600,
		color: '#1E1E1E',
		textAlign:"center"
	},
	
	subTitle: {
		color: '#969696',
		textAlign:"center"

	},
	input: {
		marginBottom: theme.spacing(1),
	},
	messageInput: {
		marginTop: theme.spacing(2),
	},
	sectionTitle: {
		fontWeight: 600,
		marginTop: theme.spacing(2),
	},
	magazineChip: {
		margin: theme.spacing(0, 3, 2, 0),
		borderRadius: theme.spacing(1.2),
		padding: theme.spacing(1),
	},
	queryTypeCheck: {
		color: '#1E1E1E',
	},
	uploadButton: {
		border: '1px solid #707070',
		borderRadius: '190px',
		color: '#969696',
		padding: '10px 30px',
	},
	submitButton: {
		borderRadius: '190px',
		color: 'white',
		padding: '10px 30px',
		backgroundColor: '#EC1F27',
		marginTop: theme.spacing(2),
		'&:hover': {
			color: '#EC1F27',
			backgroundColor: 'white',
			border: '1px solid #EC1F27',
		},
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(0.6, 3),
		},
	},
	divider: {
		margin: '20px 0px',
	},
	attachmentLabel: {
		color: '#0F0F0F',
	},
	selectedChip: {
		backgroundColor: '#EC1F27',
		color: 'white',
		border: 'none',
	},
	fileSelection: {
		width: '0.5px',
		opacity: 0,
	},
	
}));

const ContactForm = (props) => {
	const classes = useStyles();
	const data = props.data;
	const initialFormState = {
		name: '',
		email: '',
		phone: '',
		message: '',
		order_id: '',
		subject: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	const submitForm = () => {
		let payload = {
			name: formState.name,
			email: formState.email,
			mobile_number: formState.phone,
			user_message: formState.message,
			mail_body: formState.message,
			order_id: formState.order_id,
			subject: formState.subject,
		};
	};

	return (
		<form
			className={classes.root}
			onSubmit={(e) => {
				e.preventDefault();
				submitForm();
			}}>
			<Grid container>
				<Grid item md={9}>
					<Typography gutterBottom className={classes.title}>
						Talk To Us
					</Typography>
					<Typography variant="body2" gutterBottom className={classes.subTitle}>
						We are always here for our customers. Feel free to contact us.
					</Typography>
				</Grid>
			</Grid>
			<Grid item md={12}>
				<Grid container justify="center" spacing={2}>
					<Grid item md={6}>
						<TextField
							color="secondary"
							label="Full Name"
							className={classes.input}
							value={formState.name}
							required
							onChange={(e) => {
								let val = e.target.value;
								setFormState((prev) => ({ ...prev, name: val }));
							}}
							fullWidth
						/>
					</Grid>
					<Grid item md={6}>
						<TextField
							label="Email"
							color="primary"
							fullWidth
							required
							className={classes.input}
							value={formState.email}
							type="email"
							onChange={(e) => {
								let val = e.target.value;
								setFormState((prev) => ({ ...prev, email: val }));
							}}
						/>
					</Grid>
					<Grid item md={6}>
						<TextField
							label="Phone"
							className={classes.input}
							value={formState.phone}
							color="secondary"
							type="number"
							fullWidth
							required
							onChange={(e) => {
								let val = e.target.value;
								e.target.value.length <= 10 &&
									setFormState((prev) => ({ ...prev, phone: val }));
							}}
						/>
					</Grid>
					<Grid item md={6}>
						<TextField
							label="IntrestedIn"
							className={classes.input}
							value=""
							color="secondary"
							type="number"
							fullWidth
							required
						/>
					</Grid>
				</Grid>
			</Grid>

			<TextField
				color="secondary"
				className={classes.messageInput}
				value={formState.subject}
				onChange={(e) => {
					let val = e.target.value;
					setFormState((prev) => ({ ...prev, subject: val }));
				}}
				label="Subject"
				multiline
				fullWidth
				rows={1}
				variant="outlined"
			/>
			<TextField
				color="secondary"
				className={classes.messageInput}
				value={formState.message}
				onChange={(e) => {
					let val = e.target.value;
					setFormState((prev) => ({ ...prev, message: val }));
				}}
				label="Message"
				multiline
				fullWidth
				rows={3}
				variant="outlined"
			/>
			<Button
				type="submit"
				variant="contained"
				size="large"
				disableElevation
				className={classes.submitButton}>
				Send Message
			</Button>
		</form>
	);
};
export default ContactForm;

// import React from 'react';
// import './Contact.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Contact() {
// 	return (
// 		<Container fluid={true} className="contact_container">
// 			<h1>Contact Us</h1>
// 			<p className="contact_text">
// 				We are always here for our customers. Feel free to contact us.
// 			</p>
// 			<Row className="justify-content-center">
// 				<Col md={8}>
// 					<Form>
// 						<Form.Group>
// 							<Form.Label htmlFor="full-name">Full Name</Form.Label>
// 							<Form.Control id="full-name" name="name" type="text" />
// 						</Form.Group>

// 						<Form.Group>
// 							<Form.Label htmlFor="email">Email</Form.Label>
// 							<Form.Control id="email" name="email" type="email" />
// 						</Form.Group>

// 						<Form.Group>
// 							<Form.Label htmlFor="email">Contact</Form.Label>
// 							<Form.Control id="email" name="email" type="email" />
// 						</Form.Group>

// 						<Form.Group>
// 							<Form.Label htmlFor="email">Intrested In</Form.Label>
// 							<Form.Control id="email" name="email" type="email" />
// 						</Form.Group>

// 						<Form.Group>
// 							<Form.Label htmlFor="message">Message</Form.Label>
// 							<Form.Control
// 								id="message"
// 								name="message"
// 								as="textarea"
// 								rows="3"
// 							/>
// 						</Form.Group>

// 						<Button className="d-inline-block" variant="primary" type="submit">
// 							Send
// 						</Button>
// 					</Form>
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// }

// export default Contact;
