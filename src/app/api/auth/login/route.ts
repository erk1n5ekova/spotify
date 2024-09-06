import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = async () => {
	const scopes = [
		"user-read-private",
		"user-read-email",
		"playlist-read-private",
		"app-remote-control",
		"streaming",
	].join(" ");
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

	const queryParams = querystring.stringify({
		response_type: "code",
		scope: scopes,
		client_id: clientId,
		redirect_uri: redirectUri,
	});

	const url = `https://accounts.spotify.com/authorize?${queryParams}`;

	return NextResponse.redirect(url);
};
