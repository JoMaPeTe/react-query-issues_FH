import { useQuery } from "@tanstack/react-query";
import { githubAPI } from "../../api/githubApi";
import { Label } from "../interfaces/label";
import { sleep } from "../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
	// const res = await fetch('https://api.github.com/repos/facebook/react/labels')
	// const data = await res.json()
	await sleep(3);
	const { data } = await githubAPI.get<Label[]>("/labels");
	console.log(data);
	return data;
};
export const UseLabels = () => {
	const labelsQuery = useQuery({
		queryKey: ["labels"],
		queryFn: getLabels,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60,
        // placeholderData
        // initialData no usar junto a staletime
	});
	return { labelsQuery };
};
