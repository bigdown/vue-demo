export const yesToOpen = ({ dispatch },title) => {
	dispatch('YSETOOPEN',title)
} 

export const noToOpen = ({ dispatch },title) => {
	dispatch('NOTOOPEN',title)
} 

export const toopleOpen = ({ dispatch },title) => {
	dispatch('TOOPLEOPEN',title)
} 

export const modifyTitle = ({ dispatch },title) => {
	dispatch('MODIFYTITLE',title)
} 

export const yesToLogin = ({ dispatch }) => {
	dispatch('YESTOLOGIN')
} 