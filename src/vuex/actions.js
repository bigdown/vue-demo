export const yesToShow = ({ dispatch }) => {
	dispatch('YESTOSHOW')
}

export const noToShow = ({ dispatch }) => {
	dispatch('NOTOSHOW')
}

export const modifyTitle = ({ dispatch },title) => {
	dispatch('MODIFYTITLE',title)
} 

export const yesToLogin = ({ dispatch }) => {
	dispatch('YESTOLOGIN')
} 