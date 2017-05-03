import React from 'react';

export default class EditProfile extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {editProfile : false};
  	}
  	

  	_buttonClick(event) {
  		event.preventDefault();
		this.setState({editProfile : true});
	}
	_close(event) {
		event.preventDefault();
		this.setState({editProfile : false});
	}
	_submit(event) {
		event.preventDefault();
		this.setState({editProfile : false});

		const data = {
	      donor: 1,
	      header: $("#donorHeader").val(),
	      profile: $("#donorProfile").val()
	    };

    	$.post('/editProfile', data);
	}

	render() {
		let style;
  		if (this.state.editProfile) {
  			style = "modal display";
  		} else {
  			style = "modal no-display";
  		}
		
		return (
			<div>
				<button id="editProfile" className="btn btn-info pull-right" onClick={this._buttonClick.bind(this)}>Edit Profile</button>
				<div className={style}>
					<div class="modal-content animate">
						<div class="modal-body">
							<input classname="form-control" id="donorHeader" type="text" placeholder="MAKE THIS BE WHAT IT USED TO BE"/>
							<input classname="form-control" id="donorProfile" type="text" placeholder="MAKE THIS BE WHAT IT USED TO BE"/>
						</div>
						<div class="modal-footer">
							<button className="btn btn-primary" onClick={this._close.bind(this)}>cancel</button>
							<button className="btn btn-primary" type="submit" onClick={this._submit.bind(this)}>save info</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}