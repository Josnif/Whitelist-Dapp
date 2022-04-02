// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0; 

contract WhitelistedAddress {
    uint8 public maxWhitelistedAddresses;

    mapping (address=>bool) public whitelistedAddresses;

    uint public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    function addWhitelistAddress() public {
        require(!whitelistedAddresses[msg.sender], "The sender has already been whitelisted");
        require(numAddressesWhitelisted < maxWhitelistedAddresses, "Whitelisted addresses has already reached its limit");
        whitelistedAddresses[msg.sender] = true;
        numAddressesWhitelisted += 1;
    }
}