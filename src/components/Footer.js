import React from 'react';

class Footer extends React.Component {
  static propTypes = {
    changeFilterType: React.PropTypes.func.isRequired,
    filterType: React.PropTypes.string.isRequired,
    getCount: React.PropTypes.func.isRequired,
    clearCompleted: React.PropTypes.func.isRequired,
    getCompleted: React.Proptypes.func.isRequired
  }
  render() {
    let clearButton = null;

    if (this.props.getCompleted() > 0) {
      clearButton = (
        <button
          className='clear-completed'
          onClick={this.props.clearCompleted.bind(null)}>
          clear completed
        </button>
      );
    } else {
      clearButton = null;
    }
    return (
      <footer className='footer'>
        <span className='todo-count'>
          <strong>{this.props.getCount()}</strong> tasks left
        </span>
        <ul className='filters'>
						<li>
							<a
                onClick={this.props.changeFilterType.bind(null, 'all')}
                className={this.props.filterType === 'all' ? 'selected' : ''}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a
                onClick={this.props.changeFilterType.bind(null, 'active')}
								className={this.props.filterType === 'active' ? 'selected' : ''}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
                onClick={this.props.changeFilterType.bind(null, 'completed')}
								className={this.props.filterType === 'completed' ? 'selected' : ''}>
									Completed
							</a>
						</li>
            {clearButton}
					</ul>
      </footer>
    );
  }
}

export default Footer;
