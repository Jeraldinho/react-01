import React from "react";
import "./Users.css";

let Users = (props) => {

	let pageCount = Math.ceil(props.usersTotalCount / props.pageSize);
	let pages = [];
	let currentPage = props.currentPage;

	let maxPageBtnToShow = props.pageBtnCount;

	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	let startPage = 0;
	let endPage = maxPageBtnToShow;

	if (pageCount > maxPageBtnToShow) {
		if (currentPage > 3 && pageCount - currentPage >= 3) {
			startPage = currentPage - 4;
			endPage = currentPage + 3;
		} else if (currentPage < 3) {
			startPage = 0;
			endPage = maxPageBtnToShow;
		} else if (pageCount - currentPage < 3) {
			startPage = pageCount - maxPageBtnToShow;
			endPage = pageCount;
		}
	} else {
		startPage = 0;
		endPage = pageCount - 1;
	}

	let newPages = pages.slice(startPage, endPage);

	return (
		<div className="users">
			<div className="pagination">
				<div className="pagination__info">
					<p>
						Показано страниц: {currentPage} из {pageCount}
					</p>
				</div>

				<ul className="pagination__list">
					<li
						className="disabled"
						onClick={() => {
							props.toFirstPage();
						}}
					>
						<span>First</span>
					</li>
					<li
						className="disabled"
						onClick={() => {
							props.onPrevPage();
						}}
					>
						<span>«</span>
					</li>

					{newPages.map((page) => {
						return (
							<li
								className={currentPage === page && "active"}
								onClick={() => {
									props.onChangeCurrentpage(page);
								}}
							>
								<span>{page}</span>
							</li>
						);
					})}

					<li
						className="control"
						onClick={() => {
							props.onNextPage();
						}}
					>
						<span>»</span>
					</li>
					<li
						className="control"
						onClick={() => {
							props.toLastPage();
						}}
					>
						<span>Last</span>
					</li>
				</ul>
			</div>

			<div className="users__items">{props.createUsersElements()}</div>
		</div>
	);
};

export default Users;
