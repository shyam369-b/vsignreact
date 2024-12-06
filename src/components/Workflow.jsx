import React from 'react'

function Workflow() {
  return (
    <div className='workflow-items'>
        <h2>The <span>VSign</span> Way</h2>
        <p>Our systematic & professional approach to lighting up your brand is what sets us apart.</p>
        <div class="workflow-section">
            
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-cogs"></i></div>
                </div>
                <div class="label">Requirement Analysis</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-tasks"></i></div>
                </div>
                <div class="label">Site Survey</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-chart-line"></i></div>
                </div>
                <div class="label">Concept Design</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-flag-checkered"></i></div>
                </div>
                <div class="label">Cost Estimation</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-cogs"></i></div>
                </div>
                <div class="label">Client Approvals</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-tasks"></i></div>
                </div>
                <div class="label">Concept Development</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-chart-line"></i></div>
                </div>
                <div class="label">Production Ready</div>
                <div class="line"></div>
            </div>
            <div class="step">
                <div class="outer-circle">
                    <div class="inner-circle"><i class="fas fa-flag-checkered"></i></div>
                </div>
                <div class="label">Final Installation</div>
            </div>
        </div>
        <center>
        <a href='/'><button type="submit" class="btncnt">
			See More

		</button> </a>
        </center>
    </div>
  )
}

export default Workflow
