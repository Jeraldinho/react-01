const Profile = () => {
	return (
		<div className="content">
			<div className="profile">
				<div className="avatar">
					<a href="">
						<img
							src="https://via.placeholder.com/250x300"
							alt="ava"
						/>
					</a>
				</div>

				<div className="user-info">
					<div className=".user-info__item user-info__name">
						Jhon Doe
					</div>
					<div className="user-info__item user-info__birthday">
						<span>Date of Birth:</span> 01.01.1981
					</div>
					<div className="user-info__item user-info__birthday">
						<span>City:</span> New York
					</div>
					<div className="user-info__item user-info__edu">
						<span>Education:</span> MGU'08
					</div>
					<div className="user-info__item user-info__website">
						<span>Web Site:</span> https://microsoft.com
					</div>
				</div>

				<div className="my-posts">
					<div className="my-posts__title">
						My posts
					</div>
					<form action="" className="write-post-form">
						<textarea name="post-massage" id="" cols="30" rows="2" placeholder="Your news"></textarea>

						<div className="text-right">
							<button className="send-post-btn btn">Send</button>
						</div>
					</form>

					<div className="post-list">
						<div className="post-list__item">
							<div className="post-list__item-avatar">
								ava img
							</div>
							<div className="post-list__item-text">
								Some post text...
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
