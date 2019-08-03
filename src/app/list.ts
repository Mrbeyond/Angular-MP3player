export class Playlistparameters {
	playlistname: string;
	playlistsongs: Songlistparameters[];
	id: number;
}

export class Songlistparameters {
	id: number;
	name: string;
	src: string;
	state: boolean;
	Artist: string;
	Year: string;

}

