import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/react";
import {
	DatePicker,
	DesktopDatePicker,
	LocalizationProvider,
} from "@mui/x-date-pickers";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const Register = () => {
	return (
		<div className="w-1/3 h-full mt-24 mx-auto p-8 rounded-md flex gap-8 flex-col shadow-lg ">
			<Heading
				as="h2"
				size="xl"
				className="text-center font-bold text-cyan-700"
			>
				Welcome to the gang!
			</Heading>

			<form className="mt-auto flex flex-col gap-8 ">
				<FormControl>
					<FormLabel htmlFor="username">Username</FormLabel>
					<Input id="username" type="text" />
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="first_name">First Name</FormLabel>
					<Input id="first_name" type="text" />
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="last_name">Last Name</FormLabel>
					<Input id="last_name" type="text" />
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="email">Email Address</FormLabel>
					<Input id="email" type="email" />
					<FormHelperText>We'll never share your email.</FormHelperText>
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="age">Age</FormLabel>
					<NumberInput id="age">
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Date desktop"
						inputFormat="MM/dd/yyyy"
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider> */}

				<FormControl>
					<FormLabel htmlFor="email">Password</FormLabel>
					<Input id="email" type="email" />
					<FormHelperText>Choose a strong one.</FormHelperText>
				</FormControl>

				<Button colorScheme="cyan" size="md">
					Register
				</Button>
				<hr className="font-bold w-full border-t-1 border-gray-300" />

				<Button colorScheme="cyan" variant="outline">
					Register with Google
				</Button>
			</form>
		</div>
	);
};

export default Register;
