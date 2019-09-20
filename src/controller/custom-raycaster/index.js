// Implement new interface
// https://github.com/facebook/react-360/issues/471

const CustomRaycaster = {
	drawsCursor: () => true,
	fillDirection: direction => {
	  direction[0] = 0;
	  direction[1] = 0;
	  direction[2] = -1;
	  return true;
	},
	fillOrigin: origin => {
	  origin[0] = 0;
	  origin[1] = 0;
	  origin[2] = 0;
	  return true;
	},
	getMaxLength: () => Infinity,
	getType: () => "simple",
	hasAbsoluteCoordinates: () => false
  };
  
  export default CustomRaycaster;