import React from "react";
import css from "./Pagination.module.css";
import {getUsers} from "../../../../store/usersPageReducer";

export default function Pagination(props) {
    const pagination = () => {
        let countPage = [1];
        let maxCountPage = Math.ceil(props.totalUsersCount / props.pageSize);

        if (props.selectedPage >= maxCountPage - 3) {
            for (let i = 5; i > 0; i--) {
                countPage.push((maxCountPage - i))
            }
        } else if (props.selectedPage > 3) {
            countPage = [1,
                props.selectedPage - 2,
                props.selectedPage - 1,
                props.selectedPage,
                props.selectedPage + 1,
                props.selectedPage + 2]
        } else {
            for (let i = 2; i < 7; i++) {
                countPage.push(i)
            }
        }
        countPage.push(maxCountPage);
        return countPage.map(count => <span
            className={props.selectedPage === count ? css.selectedPage : css.simplePage}
            onClick={() => {
                props.getUsers(count)
            }}> {count} </span>)
    }

    return <div>
        {pagination()}
    </div>
}