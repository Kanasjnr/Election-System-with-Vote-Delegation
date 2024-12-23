#  DVoting: Decentralized Voting System

## Overview

 DVoting is a blockchain-based decentralized voting system designed to ensure transparent, secure, and efficient elections across  states. This dApp combines smart contracts for backend logic with a modern, responsive frontend to provide a comprehensive voting solution.

## Features

- **State-Specific Elections**: Each  state can conduct independent elections.
- **Secure Voter Registration**: Electoral board manages voter registration with blockchain verification.
- **Vote Delegation**: Voters can securely delegate their voting power within their state.
- **Tamper-Proof Voting**: Utilizes blockchain technology to ensure vote integrity.
- **Automatic Result Declaration**: Smart contracts determine winners upon election closure.
- **Responsive UI**: Modern, user-friendly interface accessible on various devices.

## Technology Stack

- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Icons**: React Feather
- **Build Tool**: Vite

## Smart Contracts

The system consists of three main smart contracts:

1. **VoterRegistration.sol**: Manages voter registration and verification.
2. **Election.sol**: Handles the election process for a specific state.
3. **ElectionFactory.sol**: Deploys and manages individual state election contracts.

### VoterRegistration.sol

This contract is responsible for registering voters and maintaining their information.

Key functions:
- `registerVoter(address _voter, string memory _state)`: Registers a voter for a specific state.
- `isVoterRegistered(address _voter)`: Checks if a voter is registered.
- `getVoterState(address _voter)`: Retrieves the state of a registered voter.

### Election.sol

This contract manages the election process for a single state.

Key functions:
- `addCandidate(string memory _name)`: Adds a candidate to the election.
- `delegateVote(address _to)`: Allows a voter to delegate their vote.
- `vote(uint256 _candidateIndex)`: Casts a vote for a candidate.
- `endElection()`: Closes the election.
- `getWinner()`: Returns the name of the winning candidate.

### ElectionFactory.sol

This contract deploys and manages individual state election contracts.

Key functions:
- `deployElection(string memory _stateName)`: Deploys a new election contract for a state.
- `addCandidatesToElection(address _electionAddress, string[] memory _candidates)`: Adds candidates to a specific state's election.
- `getAllElections()`: Returns a list of all deployed elections.

## Setup and Deployment

### Smart Contracts

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

3. Deploy the contracts:
   ```bash
   npx hardhat run scripts/deploy.js --network <your-network>
   ```

4. Note down the deployed contract addresses for frontend integration.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Voter Registration**:
   - The electoral board registers voters using the `VoterRegistration` contract.
   - Each voter is registered with their Ethereum address and state.

2. **Creating Elections**:
   - Use the `ElectionFactory` contract to deploy new elections for each state.
   - Add candidates to each state's election.

3. **Voting Process**:
   - Registered voters can delegate their vote or vote directly.
   - Voters can only participate in their registered state's election.

4. **Ending the Election**:
   - The election can be ended by calling the `endElection()` function.
   - After the election is closed, the winner can be determined using `getWinner()`.

## Security Considerations

- Only the electoral board can register voters.
- Voters can only vote in their registered state's election.
- Vote delegation is restricted to prevent circular delegation.
- The contracts use access control to prevent unauthorized actions.

## Future Improvements

- Implement a frontend interface for easier interaction with the contracts.
- Add more detailed voter information and verification processes.
- Implement a dispute resolution mechanism.
- Enhance privacy features to protect voter information.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.