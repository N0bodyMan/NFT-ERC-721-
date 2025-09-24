const { expect } = require("chai");

describe("MyNFT", function () {
  it("Should mint NFT", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();

    await myNFT.mint(addr1.address);
    expect(await myNFT.ownerOf(0)).to.equal(addr1.address);
  });
});
