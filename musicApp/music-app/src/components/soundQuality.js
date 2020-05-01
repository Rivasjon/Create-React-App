import React from 'react';
import { FormControl, MenuItem, Select, } from "@material-ui/core";




const SoundQuality = props => (

	<div className="quality-selection">
		<h2>Sound Quality</h2>
		<h4>Manually control the music quality in event of poor connection</h4>
		<div className="m-t">
			<FormControl>
				
				<Select
					value={props.qualityState}
					onChange={props.qualityFunc}>
					<MenuItem value={'low'}>Low</MenuItem>
					<MenuItem value={'normal'}>Normal</MenuItem>
					<MenuItem value={'high'}>High</MenuItem>
				</Select>
			</FormControl>
		</div>
	</div>

)

export default SoundQuality;