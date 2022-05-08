// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import {
	ArrowBackIcon,
	ArrowForwardIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
} from "@chakra-ui/icons";
import {
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
} from "@chakra-ui/react";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
import { shade } from "./../../static/templates/colors";
import { useState } from "react";

const EditPaySlips = ({
	stage,
	setStage,
	stopEditing,
	profile,
	setProfile,
}) => {
	const [urls, setUrls] = useState([]);
	const [currentUrlIndex, setCurrentUrlIndex] = useState(null);

	const onChange = (e) => {
		const files = e.target.files;
		let fileUrls = [];
		for (let i = 0; i < files.length; i++) {
			fileUrls.push(URL.createObjectURL(files[i]));
		}
		console.log(fileUrls);
		setUrls(fileUrls);
		if (files.length > 0) {
			setCurrentUrlIndex(0);
		}
	};

	return (
		<>
			<div className="bg-shade-200 h-full w-full rounded-r-xl py-6 px-12 flex flex-col gap-4">
				<Heading as="h2" size="xl" textAlign="center">
					Pay Slips
				</Heading>
				<form className="flex flex-col h-full justify-evenly gap-8 ">
					<div className="h-1/2 overflow-y-scroll">
						{urls.length > 0 && currentUrlIndex >= 0 ? (
							<div className="flex items-stretch h-full">
								<IconButton
									aria-label="Move Left"
									height="100%"
									bgColor={shade[200]}
									_hover={{ unset: "all", bgColor: shade[300] }}
									icon={<ArrowLeftIcon />}
									onClick={() => {
										setCurrentUrlIndex(
											(currentUrlIndex - 1 + urls.length) % urls.length
										);
									}}
								/>
								<Viewer fileUrl={urls[currentUrlIndex]} />
								<IconButton
									aria-label="Move Right"
									height="100%"
									bgColor={shade[200]}
									_hover={{ unset: "all", bgColor: shade[300] }}
									icon={<ArrowRightIcon />}
									onClick={() => {
										setCurrentUrlIndex((currentUrlIndex + 1) % urls.length);
									}}
								/>
							</div>
						) : (
							<div className="flex justify-center items-center h-full w-full border-2 border-shade-900 border-dashed border-opacity-30 text-3xl">
								Preview area
							</div>
						)}
					</div>

					<FormControl>
						<FormLabel htmlFor="pay_slips">
							Upload your Pay Slips in PDF format
						</FormLabel>
						<Input
							id="pay_slips"
							type="file"
							accept="application/pdf"
							multiple
							onChange={onChange}
							name="pay_slips"
							fontSize="lg"
							padding="1"
							borderColor={shade[800]}
							_hover={{ borderColor: shade[900] }}
							_active={{ borderColor: shade[900] }}
							borderWidth={1}
						/>
					</FormControl>

					<ButtonGroup spacing="6">
						<Button
							leftIcon={<ArrowBackIcon />}
							bgColor={shade[200]}
							textColor={shade[800]}
							borderWidth={1}
							borderColor={shade[800]}
							_hover={{
								bgColor: shade[500],
								textColor: shade[900],
								borderColor: shade[900],
								borderWidth: 1,
							}}
							size="md"
							onClick={() => setStage(stage - 1)}
						>
							Back
						</Button>
						<Button
							rightIcon={<ArrowForwardIcon />}
							bgColor={shade[800]}
							textColor={shade[200]}
							borderWidth={1}
							borderColor={shade[100]}
							_hover={{
								bgColor: shade[500],
								textColor: shade[900],
								borderColor: shade[900],
								borderWidth: 1,
							}}
							size="md"
							onClick={() => setStage(stage + 1)}
						>
							Continue
						</Button>
						<Button
							bgColor={shade[200]}
							textColor={shade[800]}
							borderWidth={1}
							borderColor={shade[800]}
							_hover={{
								bgColor: shade[500],
								textColor: shade[900],
								borderColor: shade[900],
								borderWidth: 1,
							}}
							size="md"
						>
							Clear
						</Button>

						<Button
							bgColor={shade[200]}
							textColor={shade[800]}
							borderWidth={1}
							borderColor={shade[800]}
							_hover={{
								bgColor: shade[500],
								textColor: shade[900],
								borderColor: shade[900],
								borderWidth: 1,
							}}
							size="md"
							onClick={stopEditing}
						>
							Cancel
						</Button>
					</ButtonGroup>
				</form>
			</div>
		</>
	);
};

export default EditPaySlips;
