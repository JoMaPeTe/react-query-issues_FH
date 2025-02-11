import { FC } from "react";
import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { UseLabels } from "../hooks/useLabels";

interface Props {
	selectedLabel: string[];
	onChange: (labelName: string) => void;
}
export const LabelPicker: FC<Props> = ({ selectedLabel, onChange }) => {
	const { labelsQuery } = UseLabels();
	console.log("uselabel", labelsQuery);
	if (labelsQuery.isLoading) {
		return <LoadingIcon />;
	}
	return (
		<>
			{labelsQuery.data?.map((label) => (
				<span
					key={label.id}
					className={`badge rounded-pill m-1 label-picker ${
						selectedLabel.includes(label.name) ? "label-active" : ""
					}`}
					style={{
						border: `1px solid  #${label.color}`,
						color: `#${label.color}`,
					}}
					onClick={() => onChange(label.name)}
				>
					{label.name}
				</span>
			))}
		</>
	);
};
