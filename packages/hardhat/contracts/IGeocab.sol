pragma solidity >=0.8.0 <0.9.0;

interface IGeocab {
	struct DriverLocation {
		address driver;
		int128 lat;
		int128 lon;
	}

	struct Location {
		int128 lat;
		int128 lon;
	}

	function publishDriverLocations(DriverLocation[] memory drivers) external;

	function driverAtGeohash(
		string calldata geohash
	) external view returns (address[] memory);

	function bookTrip(
		Location calldata origin,
		Location calldata destination
	) external view;

	function number() external view returns (uint256);

	function setNumber(uint256 new_number) external;

	function increment() external;
}
