import { useQuery } from "@tanstack/react-query";
import { githubAPI } from "../../api/githubApi";
import { Issue } from "../interfaces";
import { sleep } from "../helpers/sleep";

const getIssues = async (): Promise<Issue[]> => {
	await sleep(2);
	const { data } = await githubAPI.get<Issue[]>("/issues");
	return data;
};
export const useIssues = () => {
	const issuesQuery = useQuery({
		queryKey: ["issues"],
		queryFn: getIssues,
	});
	return {
		issuesQuery,
	};
};
